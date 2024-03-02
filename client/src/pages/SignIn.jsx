import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./validtionSchemas";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";

const defaultValues = {
  userName: "",
  password: "",
};

export default function SignIn() {
  const { handleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signInSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className={style.wrapper}>
      <h2>Sign in</h2>
      <Field
        name="userName"
        register={register}
        autoComplete="off"
        placeholder="User name"
        error={Boolean(errors.userName)}
        helperText={errors.userName?.message}
      />
      <Field
        name="password"
        register={register}
        autoComplete="off"
        placeholder="Password"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Button disabled={isSubmitting} type="submit">
        Sign in
      </Button>
    </form>
  );
}
