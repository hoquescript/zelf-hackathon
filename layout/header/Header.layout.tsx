/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.scss";
import Button from "@/components/atoms/Button/Button.component";
import { useUser } from "@auth0/nextjs-auth0/client";
import Avatar from "@/components/atoms/Avatar/Avatar.component";
import { useRouter } from "next/router";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  console.log(user);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <img src={user ? "/logo.svg" : "/logo_black.svg"} alt="Zelf Logo" />
          {user ? (
            <Avatar src={user?.picture!} size={32} />
          ) : (
            <nav>
              <Button
                onClick={() => {
                  router.push(
                    "https://dev-fny66p20228pm7ka.us.auth0.com/u/signup?state=hKFo2SBXUkp0TDgxWGNrckM2Z2xnazZKOGtLLTgwVFItV1JHNqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHVXNmFpeUNxckdFc082NDdhMVd0WFdzajFEdFBZV0tso2NpZNkgZVlqREdzeDlIMTJBQWdUVFVMYWFwNkpxNmlmM0ZQZFk",
                  );
                }}
                variant="outlined"
                className="mr-10"
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  router.push("/api/auth/login/");
                }}
              >
                Join
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
