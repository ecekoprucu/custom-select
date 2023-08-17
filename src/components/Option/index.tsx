import React from "react";

import * as S from './styled';

type Props = {
    text: string;
    value: string;
    onSelect: (value: any) => void;
}

export const Option = ({text, value, onSelect}: Props) => {
    return <S.Option onClick={() => onSelect((val: any) => !val.includes(text) ? [...val, text] : val)} value={value}>{text}</S.Option>;
};