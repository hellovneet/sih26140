import {useState} from "react";
export function useProgress(initial=68){const [progress,setProgress]=useState(initial);return {progress,setProgress};}