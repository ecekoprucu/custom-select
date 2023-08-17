import React from "react";
import * as S from './styled';

type Props = {
    tagName: string;
    setTags: (tags: any) => void;
}

export const Tag = ({tagName, setTags}: Props) => {
    const handleRemove = () => {
        setTags((tags: any) => tags.filter((tag: string) => tag !== tagName));
    }
    return <S.TagWrapper>
        <S.TagText>{tagName}</S.TagText>
        <S.TagClose onClick={handleRemove}>X</S.TagClose>
    </S.TagWrapper>;
};