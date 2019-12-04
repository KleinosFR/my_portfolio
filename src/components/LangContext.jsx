import React from "react";
export const lang ={
    french :{
        lang : "fr"
    },
    english : {
        lang : "en"
    }
};

export const LangContext = React.createContext(lang.french)


export default LangContext; 