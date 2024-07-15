import React from "react";

import * as S from './styled';

type Props = {
    text: string;
    value: string;
    singleSelect?: boolean;
    onSelect: (value: any) => void;
}

export const Option = ({text, value, singleSelect, onSelect}: Props) => {
    return <S.Option onClick={() => {
        if(singleSelect) {
            onSelect([text]);
        } else {
            onSelect((val: any) => !val.includes(text) ? [...val, text] : val)
        }
    }} value={value}>{text}</S.Option>;
};