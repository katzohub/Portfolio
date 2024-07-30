import { useState, useEffect } from "react";

const useTypewriter = (
  words: string[],
  typingSpeed = 150,
  erasingSpeed = 100,
  delayBetweenWords = 2000,
  stopAfter = 300000
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const stopTimeout = setTimeout(() => {
      setIsStopped(true);
      setCurrentWordIndex(0);
      setCurrentText(words[0]);
    }, stopAfter);

    return () => clearTimeout(stopTimeout);
  }, [words, stopAfter]);

  useEffect(() => {
    if (isStopped) return;

    const word = words[currentWordIndex];

    if (!isDeleting && currentText === word) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      const timeout = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
          );
        },
        isDeleting ? erasingSpeed : typingSpeed
      );

      return () => clearTimeout(timeout);
    }
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    erasingSpeed,
    delayBetweenWords,
    isStopped,
  ]);

  return currentText;
};

export default useTypewriter;
