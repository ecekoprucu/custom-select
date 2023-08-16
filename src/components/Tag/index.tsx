import React from "react";
import * as S from './styled';

type Props = {
    tagName: string;
}

export const Tag = ({tagName}: Props) => {
    return <S.TagWrapper>
        <S.TagText>{tagName}</S.TagText>
        <S.TagClose>X</S.TagClose>
    </S.TagWrapper>;
};