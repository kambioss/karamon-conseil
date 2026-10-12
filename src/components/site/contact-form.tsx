"use client";

import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SUBJECTS = [
  { value: "etudes-impact", key: "eies" },
  { value: "pges", key: "pges" },
  { value: "par", key: "par" },
  { value: "audit", key: "audit" },
  { value: "biodiversite", key: "bio" },
  { value: "formation", key: "formation" },
  { value: "autre", key: "other" },
] as const;

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };
type Field = keyof typeof EMPTY;

export function ContactForm() {
  const t = useTranslations("contact");
  const { toast } = useToast();
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const set = (field: Field) => (value: string) => {
    setFormData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const next: Partial<Record<Field, string>> = {};
    if (formData.name.trim().length < 2) next.name = t("nameRequired");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = t("emailInvalid");
    if (!formData.subject) next.subject = t("subjectRequired");
    if (formData.message.trim().length < 10) next.message = t("messageRequired");
    setErrors(next);

    const firstInvalid = (Object.keys(EMPTY) as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData(EMPTY);
        requestAnimationFrame(() => successRef.current?.focus());
      } else {
        toast({
          title: t("error"),
          description: data.message || t("serverError"),
          variant: "destructive",
        });
      }
    } catch {
      toast({ title: t("error"), description: t("serverError"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center gap-5 py-8 text-center outline-none animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 aria-hidden className="h-10 w-10 text-primary" strokeWidth={1.5} />
        </div>
        <div className="max-w-sm space-y-2">
          <h3 className="font-serif text-2xl font-semibold text-foreground">{t("successTitle")}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{t("successMessage")}</p>
        </div>
        <Button variant="outline" className="h-11" onClick={() => setSuccess(false)}>
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="text-sm text-muted-foreground">{t("requiredHint")}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            {t("name")} <span aria-hidden className="text-destructive">*</span>
          </Label>
          <Input
            {...fieldProps("name")}
            autoComplete="name"
            required
            className="h-11"
            placeholder={t("namePlaceholder")}
            value={formData.name}
            onChange={(e) => set("name")(e.target.value)}
          />
          {errorText("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            {t("emailLabel")} <span aria-hidden className="text-destructive">*</span>
          </Label>
          <Input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            className="h-11"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={(e) => set("email")(e.target.value)}
          />
          {errorText("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="h-11"
            placeholder={t("phonePlaceholder")}
            value={formData.phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">
            {t("subject")} <span aria-hidden className="text-destructive">*</span>
          </Label>
          <Select value={formData.subject} onValueChange={set("subject")}>
            <SelectTrigger {...fieldProps("subject")} aria-required className="h-11 w-full">
              <SelectValue placeholder={t("subjectPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {t(`subjects.${s.key}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errorText("subject")}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {t("message")} <span aria-hidden className="text-destructive">*</span>
        </Label>
        <Textarea
          {...fieldProps("message")}
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          value={formData.message}
          onChange={(e) => set("message")(e.target.value)}
        />
        {errorText("message")}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="h-12 w-full rounded-xl text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 aria-hidden className="animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send aria-hidden />
            {t("send")}
          </>
        )}
      </Button>
    </form>
  );
}
