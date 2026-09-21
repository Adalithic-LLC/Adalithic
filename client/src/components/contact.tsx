import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t("contact.toastSuccessTitle"),
        description: t("contact.toastSuccessDesc"),
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: t("contact.toastErrorTitle"),
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.supportEmail"),
      value: "arcatextapp@gmail.com",
      href: "mailto:arcatextapp@gmail.com",
    },
  ];

  

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-secondary">{t("contact.title")}</h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <Card className="bg-cream-soft rounded-3xl border-0 shadow-sm ring-1 ring-black/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-6">{t("contact.formTitle")}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">{t("contact.firstName")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">{t("contact.lastName")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              {...field}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">{t("contact.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">{t("contact.company")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.phCompany")}
                            {...field}
                            // company is the one nullable column on the form, so
                            // field.value is string | null | undefined. Coerce it
                            // to "" to keep the input controlled — React drops a
                            // null value and the field would switch to uncontrolled.
                            value={field.value ?? ""}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">{t("contact.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder={t("contact.phMessage")}
                            {...field}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0036BB] transition-colors duration-200"
                  >
                    {submitMutation.isPending ? t("contact.sending") : t("contact.send")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="rounded-3xl bg-gradient-to-br from-brand to-[#0036BB] p-8 text-white shadow-lg shadow-blue-900/15">
            <h3 className="text-2xl font-semibold">{t("contact.infoTitle")}</h3>
            <p className="mt-3 text-blue-100 leading-relaxed">{t("contact.infoDesc")}</p>
            <div className="mt-8 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-100">{info.label}</p>
                    <a href={info.href} className="text-lg font-medium text-white hover:underline">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
