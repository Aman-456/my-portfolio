"use client";

import { useFormState, useFormStatus } from "react-dom";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border bg-muted/40 p-6 text-center"
      >
        <p className="font-medium">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto w-full max-w-md space-y-4 text-left"
      noValidate
    >
      {/* Honeypot: hidden from users, catches bots. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px]"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={!!state.errors?.name}
          aria-describedby="name-error"
          defaultValue=""
        />
        <FieldError id="name-error" message={state.errors?.name} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!state.errors?.email}
          aria-describedby="email-error"
          defaultValue=""
        />
        <FieldError id="email-error" message={state.errors?.email} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          aria-invalid={!!state.errors?.message}
          aria-describedby="message-error"
          defaultValue=""
        />
        <FieldError id="message-error" message={state.errors?.message} />
      </div>

      {state.status === "error" && !state.errors && (
        <p
          role="alert"
          className={cn("text-sm text-destructive")}
        >
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
