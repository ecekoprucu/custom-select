import React, { useCallback } from "react";
import * as S from "./styled";
import { Tag } from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    tags: string[];
    searchText: string;
    setSearchText: (text: string) => void;
    showOptions: boolean;
    setShowOptions: (show: boolean) => void;
    setTags: (tags: string[]) => void;
}

export const Top = ({tags, searchText, setSearchText, showOptions, setShowOptions, setTags}: Props) => {

    const handleClear = useCallback(() => {
        if(tags.length > 0 || searchText.length > 0) {
            setSearchText('');
            setTags([]);
            setShowOptions(false);
        }
    }, [tags, searchText, setSearchText, setTags, setShowOptions]);
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if(e.target.value.length > 0) {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
        }, [setSearchText, setShowOptions]);
    const handleToggle = useCallback( () => {
        setShowOptions(!showOptions);
    }, [showOptions, setShowOptions]);

    return (
        <S.Container>
           {tags.length > 0 && <S.TagArea>
                {tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} setTags={setTags}/>
                ))}
            </S.TagArea>}
            <S.SearchArea>
                <S.Input type='text' onChange={handleInputChange} value={searchText}/>
            </S.SearchArea>
           {(searchText.length > 0 || tags.length > 0) && <S.ClearButton onClick={handleClear}>
                <FontAwesomeIcon icon={faXmark} />
            </S.ClearButton>}
            <S.ClearButton onClick={handleToggle}>
                <FontAwesomeIcon icon={showOptions ? faCaretUp :faCaretDown} />
            </S.ClearButton>
        </S.Container>
    );
}