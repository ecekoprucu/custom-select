import React from "react";
import { Option as OptionProp } from "../Select";

import * as S from './styled';
import { Option } from "../Option";

type Props = {
    options: OptionProp[];
    searchText: string;
    setTags: (tags: string[]) => void;
}

export const Bottom = ({options, searchText, setTags}: Props) => {
    return (
        <S.Container>
            {searchText.length === 0 ? options.map((option, index) => (
                <Option value={option.value} text={option.text} key={index} />
            )) : options.filter(option => option.text.includes(searchText)).map((option, index) => (
                <Option value={option.value} text={option.text} key={index} />
            ))}
        </S.Container>
    );
};