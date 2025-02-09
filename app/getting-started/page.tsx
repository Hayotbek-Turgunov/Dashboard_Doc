import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started | Minimal Docs Site",
  description:
    "Learn how to get started with our documentation site and tools.",
};

export default function GettingStarted() {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Getting Started</h1>
      <p className="text-lg mb-8 text-gray-700">
        Welcome to the getting started guide for our documentation site. Follow
        these steps to set up your environment and begin using our tools.
      </p>

      <section aria-labelledby="installation">
        <h2 id="installation" className="text-2xl font-semibold mt-8 mb-4">
          Installation
        </h2>
        <p className="mb-4 text-gray-700">
          To install our package, run the following command in your terminal:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Installation command"
        >
          <code>npm install @our-company/package</code>
        </pre>
      </section>

      <section aria-labelledby="configuration">
        <h2 id="configuration" className="text-2xl font-semibold mt-8 mb-4">
          Configuration
        </h2>
        <p className="mb-4 text-gray-700">
          After installation, you need to set up the configuration file. Create
          a file named{" "}
          <code className="text-blue-600 bg-gray-200 px-1 py-0.5 rounded">
            config.js
          </code>{" "}
          in your project root and add the following content:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Configuration file content"
        >
          <code>{`module.exports = {
  apiKey: 'YOUR_API_KEY',
  environment: 'production',
}`}</code>
        </pre>
      </section>

      <section aria-labelledby="usage">
        <h2 id="usage" className="text-2xl font-semibold mt-8 mb-4">
          Usage
        </h2>
        <p className="mb-4 text-gray-700">
          Here&apos;s a basic example of how to use our package in your project:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Usage example"
        >
          <code>{`import { Client } from '@our-company/package';

const client = new Client();
const result = await client.doSomething();
console.log(result);`}</code>
        </pre>
      </section>

      <p className="mt-8 text-gray-700">
        For more detailed information, please check out our{" "}
        <a href="/components" className="text-blue-600 underline">
          Components
        </a>{" "}
        and{" "}
        <a href="/api-reference" className="text-blue-600 underline">
          API Reference
        </a>{" "}
        sections.
      </p>
    </main>
  );
}
