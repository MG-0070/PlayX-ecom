import {useEffect} from "react";

export const useDocumentTitle = (title) => {
            useEffect(() => {
         document.title = `PlayX-Store | ${title}`
            },[title])
}