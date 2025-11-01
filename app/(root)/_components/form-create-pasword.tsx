"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const FormCreatePassword = () => {
  const [password, setPassword] = useState("GeneratedPassword123!");
  const [changed, setChanged] = useState(false);

  const handleCopyClicboard = () => {
    setChanged(true);
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success("Password copied to clipboard!");
      })
      .finally(() => {
        setTimeout(() => setChanged(false), 2000);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">Password Generate</h1>
        <p className="text-muted-foreground">
          Generate secure passwords and customize them to your needs.
        </p>
      </header>

      <Card className="rounded">
        <CardContent className="flex items-center justify-between">
          <div className="flex-1">
            <input
              type="text"
              readOnly
              value={password}
              className="w-full bg-transparent border-0 focus:ring-0 text-lg font-mono text-gray-900"
              disabled
            />
          </div>
          <Button
            size={"icon"}
            variant="outline"
            className="cursor-pointer rounded"
            onClick={handleCopyClicboard}
          >
            {changed ? (
              <Check size={32} className="text-green-600" />
            ) : (
              <Copy size={32} />
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
