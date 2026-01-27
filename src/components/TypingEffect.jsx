import { useState, useEffect} from 'react';
export const TypingEffect = () => {
    const [text, setText] = useState("");
    const [wordIndex,setwordIndex] = useState(0);
    const [phase, setPhase] = useState("typing");
    let words = ["Competitive Programmer", "X Paglu", "Web Developer", "Tech Enthusiast"];
    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;
        if(phase === "typing"){
            timeout = setTimeout(() => {
                const nextText = currentWord.slice(0, text.length + 1);
                setText(nextText);
                if(nextText === currentWord){
                    setPhase("pausing");
                }
            },60);
        } else if(phase === "pausing"){
            timeout = setTimeout(() => {
                setPhase("deleting");
            }, 1000);
        }else if(phase === "deleting"){
            timeout = setTimeout(() => {
                const nextText = currentWord.slice(0, text.length - 1);
                setText(nextText);
                if(nextText === ""){
                    setwordIndex((prev) => (prev + 1) % words.length);
                    setPhase("typing");
                }
            }, 30);
        }
        return () => clearTimeout(timeout);
    }, [text, phase, wordIndex]);

  return (
    <> <div>{text}</div> <span className='cursor animate-pulse [animation-duration:1s]'> | </span></>
  )
}
