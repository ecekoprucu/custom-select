import React from "react";

import * as S from './styled';

type Props = {
    text: string;
    value: string;
}

export const Option = ({text, value}: Props) => {
    return <S.Option value={value}>{text}</S.Option>;
};