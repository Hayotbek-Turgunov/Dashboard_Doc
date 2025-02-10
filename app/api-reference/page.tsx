import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference | Minimal Docs Site",
  description: "Detailed API reference for our library.",
};

export default function ApiReference() {
  return (
    <main className="max-w-4xl mx-auto pl-0 pr-8 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        API Reference
      </h1>
      <p className="text-base sm:text-lg lg:text-xl mb-8 text-gray-700 text-center">
        This section provides a detailed reference for the API of our library.
        You&apos;ll find information about available methods, their parameters,
        and return values.
      </p>

      <section aria-labelledby="client">
        <h2
          id="client"
          className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-gray-800"
        >
          Client
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-700">
          The main class for interacting with our API.
        </p>

        <section aria-labelledby="constructor">
          <h3
            id="constructor"
            className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800"
          >
            Constructor
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm sm:text-base">
            <code>{`new Client(config: ClientConfig)`}</code>
          </pre>
          <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-700">
            Creates a new instance of the Client class.
          </p>

          <h4 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-gray-800">
            Parameters
          </h4>
          <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-gray-700 mb-4">
            <li>
              <code className="text-blue-600">config</code>: An object
              containing the client configuration.
            </li>
          </ul>
        </section>

        <section aria-labelledby="methods">
          <h3
            id="methods"
            className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800"
          >
            Methods
          </h3>
          <h4 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-gray-800">
            doSomething()
          </h4>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm sm:text-base">
            <code>{`async doSomething(): Promise<Result>`}</code>
          </pre>
          <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-700">
            Performs an action and returns a result.
          </p>

          <h4 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-gray-800">
            Returns
          </h4>
          <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-700">
            A Promise that resolves to a Result object.
          </p>
        </section>
      </section>

      <section aria-labelledby="types">
        <h2
          id="types"
          className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-gray-800"
        >
          Types
        </h2>
        <section aria-labelledby="client-config">
          <h3
            id="client-config"
            className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800"
          >
            ClientConfig
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm sm:text-base">
            <code>{`interface ClientConfig {
  apiKey: string;
  environment: 'production' | 'development';
}`}</code>
          </pre>
        </section>

        <section aria-labelledby="result">
          <h3
            id="result"
            className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800"
          >
            Result
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm sm:text-base">
            <code>{`interface Result {
  id: string;
  data: any;
  timestamp: number;
}`}</code>
          </pre>
        </section>
      </section>

      <p className="text-sm sm:text-base lg:text-lg mt-8 text-gray-700 text-center">
        For more detailed information about specific components and their props,
        please refer to the Components section.
      </p>
    </main>
  );
}
