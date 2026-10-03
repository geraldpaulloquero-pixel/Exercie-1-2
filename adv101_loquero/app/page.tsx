import { Button }from "@/components/button";
//'export default' -- Used to export one mainfunction/component from a file.
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">    
        <h1>Hello World!</h1>
        <p>Welcome to my Next.js app.</p>
        <Button buttonText="hello i am button 1"/>
        <Button buttonText="i am the same button component with different text"/>
    </div>
  );
}

function Button() {
  return (
    <button>this is a Button Component</button>
  )
}

//'export' -- Used to make a function/component available for import in the other files.
export function Button({ button }: { buttonText: string }) {
  return (
    <div>{buttonText}</div>
  )
}

//'No export' -- The function stays private to the file and cannot be imported directly from another file.
function NewButton({ buttonText}: { buttonText: string }) {
  return (

  )
}