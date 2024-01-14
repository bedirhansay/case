"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./LoginPage.module.scss";
import { LoginDTO } from "@/lib/types";
import { login } from "@/lib/actions/_auth.actions";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginDTO) => {
    setLoading(true);

    const res = await login(data);

    if (res.error) {
      toast.error(res.error);
      setLoading(false);
    } else {
      toast.success("Başarıyla Giriş yapıldı");
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.headingSection}>
        <h2>Login</h2>
      </div>

      <div className={styles.formSection}>
        <form
          action={async () => {
            onSubmit;
          }}
          className={styles.form}
        >
          <div>
            <label htmlFor="email" className={styles.usernameLabel}>
              Username
            </label>
            <div className={styles.inputSection}>
              <Input name="username" />
            </div>
          </div>

          <div>
            <div className={styles.passwordSection}>
              <label htmlFor="password" className={styles.usernameLabel}>
                Password
              </label>
              <div className="text-sm">
                <a href="#" className={styles.forgotPasswordLink}>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className={styles.inputSection}>
              <Input id="password" name="password" type="password" />
            </div>
          </div>

          <div>
            <Button
              status={loading}
              variant="secondary"
              type="submit"
              className={styles.loginButton}
            >
              login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
