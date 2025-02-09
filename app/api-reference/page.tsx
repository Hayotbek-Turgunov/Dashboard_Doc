import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference | Minimal Docs Site",
  description:
    "Detailed API reference for our library. Learn about methods, parameters, and return values.",
};

export default function ApiReference() {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">API Reference</h1>
      <p className="text-lg mb-8 text-gray-700">
        This section provides a detailed reference for the API of our library.
        Youll find information about available methods, their parameters, and
        return values.
      </p>

      <section aria-labelledby="client-section">
        <h2 id="client-section" className="text-2xl font-semibold mt-8 mb-4">
          Client
        </h2>
        <p className="mb-4 text-gray-700">
          The main class for interacting with our API.
        </p>

        <section aria-labelledby="constructor">
          <h3 id="constructor" className="text-xl font-semibold mt-6 mb-4">
            Constructor
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm">
            <code>{`new Client(config: ClientConfig)`}</code>
          </pre>
          <p className="mb-4 text-gray-700">
            Creates a new instance of the Client class.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Parameters</h4>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <code className="text-blue-600">config</code>: An object
              containing the client configuration.
            </li>
          </ul>
        </section>

        <section aria-labelledby="methods">
          <h3 id="methods" className="text-xl font-semibold mt-6 mb-2">
            Methods
          </h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">doSomething()</h4>
          <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm">
            <code>{`async doSomething(): Promise<Result>`}</code>
          </pre>
          <p className="mb-4 text-gray-700">
            Performs an action and returns a result.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Returns</h4>
          <p className="mb-4 text-gray-700">
            A Promise that resolves to a Result object.
          </p>
        </section>
      </section>

      <section aria-labelledby="types-section">
        <h2 id="types-section" className="text-2xl font-semibold mt-8 mb-4">
          Types
        </h2>
        <section aria-labelledby="client-config">
          <h3 id="client-config" className="text-xl font-semibold mt-6 mb-2">
            ClientConfig
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm">
            <code>{`interface ClientConfig {
  apiKey: string;
  environment: 'production' | 'development';
}`}</code>
          </pre>
        </section>

        <section aria-labelledby="result">
          <h3 id="result" className="text-xl font-semibold mt-6 mb-2">
            Result
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm">
            <code>{`interface Result {
  id: string;
  data: any;
  timestamp: number;
}`}</code>
          </pre>
        </section>
      </section>

      <p className="mt-8 text-gray-700">
        For more detailed information about specific components and their props,
        please refer to the Components section.
      </p>
    </main>
  );
}
