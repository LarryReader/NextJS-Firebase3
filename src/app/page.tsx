// src/app/page.tsx
import SignInButton from "../components/SignInButton"; // Import the new component

export default function Home() {  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* ... rest of your component ... */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div>Please sign in to continue</div>
          <SignInButton /> {/* Use the Client Component here */}
        </div>

        {/* ... rest of your component ... */}
      </main>
      {/* ... footer ... */}
    </div>
  );
}
