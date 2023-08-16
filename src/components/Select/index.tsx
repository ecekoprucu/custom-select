import React, { useState } from "react";
import { Top } from "../Top";
import { Bottom } from "../Bottom";

export type Option = {
    text: string;
    value: string;
}

type Props = {
    preTags: string[];
    options: Option[];
}

export const Select = ({preTags, options}: Props) => {
    const [tags, setTags] = useState(preTags);
    const [searchText, setSearchText] = useState('');
    const [showOptions, setShowOptions] = useState<any>(false);

    return (
        <div>
            <Top tags={tags} setTags={setTags} setShowOptions={setShowOptions} searchText={searchText} setSearchText={setSearchText}/>
            {!!showOptions && <Bottom options={options} searchText={searchText} setTags={setTags}/>}
        </div>
    );
};