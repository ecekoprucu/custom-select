import React from "react";
import * as S from "./styled";
import { Tag } from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    tags: string[];
    searchText: string;
    setSearchText: (text: string) => void;
    setShowOptions: (show: any) => void;
    setTags: (tags: string[]) => void;
}

export const Top = ({tags, searchText, setSearchText, setShowOptions, setTags}: Props) => {

    const handleClear = () => {
        if(tags.length > 0 || searchText.length > 0) {
            setSearchText('');
            setTags([]);
        } else {
            setShowOptions((currentShow: boolean) => !currentShow);
        }
    }

    return (
        <S.Container>
           {tags.length > 0 && <S.TagArea>
                {tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                ))}
            </S.TagArea>}
            <S.SearchArea>
                <S.Input type='text' onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
            </S.SearchArea>
            <S.ClearButton onClick={handleClear}>
                <FontAwesomeIcon icon={ (tags.length > 0) || (searchText.length > 0) ? faXmark : faCaretDown} />
            </S.ClearButton>
        </S.Container>
    );
}