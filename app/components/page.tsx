import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | Minimal Docs Site",
  description: "Explore the components available in our library.",
};

export default function Components() {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Components</h1>
      <p className="text-lg mb-8 text-gray-700">
        Our library provides a set of reusable components to help you build your
        application faster. Here&apos;s an overview of some key components:
      </p>

      {/* Button Component */}
      <section aria-labelledby="button-component">
        <h2 id="button-component" className="text-2xl font-semibold mt-8 mb-4">
          Button
        </h2>
        <p className="mb-4 text-gray-700">
          The Button component is a versatile and customizable button that can
          be used for various actions in your application.
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Button example"
        >
          <code>{`import { Button } from '@our-company/package';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click me
</Button>`}</code>
        </pre>
      </section>

      <section aria-labelledby="card-component">
        <h2 id="card-component" className="text-2xl font-semibold mt-8 mb-4">
          Card
        </h2>
        <p className="mb-4 text-gray-700">
          The Card component is used to display content in a box with a
          consistent style.
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Card example"
        >
          <code>{`import { Card, CardHeader, CardContent } from '@our-company/package';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>This is the card content.</CardContent>
</Card>`}</code>
        </pre>
      </section>

      <section aria-labelledby="input-component">
        <h2 id="input-component" className="text-2xl font-semibold mt-8 mb-4">
          Input
        </h2>
        <p className="mb-4 text-gray-700">
          The Input component is a styled input field for collecting user data.
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Input example"
        >
          <code>{`import { Input } from '@our-company/package';

<Input placeholder="Enter your name" onChange={(e) => console.log(e.target.value)} />`}</code>
        </pre>
      </section>

      <p className="mt-8 text-gray-700">
        For a complete list of components and their props, please refer to our{" "}
        <a href="/api-reference" className="text-blue-600 underline">
          API Reference
        </a>{" "}
        section.
      </p>
    </main>
  );
}
