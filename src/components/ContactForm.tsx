"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { Loader2, Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { Badge } from "./ui/badge";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Message envoyé !",
          description: result.message,
        });
        form.reset();
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
         toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } catch (error) {
       toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold font-headline mb-4 text-green-600">
            Message envoyé avec succès !
          </h3>
          <p className="text-muted-foreground mb-6">
            Merci pour votre message. Je vous répondrai dans les plus brefs délais.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Envoyer un autre message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="font-headline text-xl">Formulaire de contact</CardTitle>
        </div>
        <p className="text-muted-foreground text-sm">
          Remplissez ce formulaire et je vous répondrai rapidement
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nom complet
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Votre nom" 
                        {...field} 
                        className="focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Adresse email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="votre@email.com" 
                        {...field} 
                        className="focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="min-h-[150px] focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex items-center justify-between">
                    <FormMessage />
                    <Badge variant="secondary" className="text-xs">
                      {field.value.length}/500 caractères
                    </Badge>
                  </div>
                </FormItem>
              )}
            />
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-medium hover:scale-[1.02] transition-transform duration-200" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                uniquement pour vous recontacter.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
