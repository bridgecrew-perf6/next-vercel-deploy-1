import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
