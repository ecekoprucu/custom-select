import React, { useState } from "react";
import { Top } from "../Top";
import { Bottom } from "../Bottom";

export type Option = {
    text: string;
    value: string;
}

type Props = {
    preTags?: string[];
    singleSelect?: boolean;
    options: Option[];
}

export const Select = ({preTags, options, singleSelect}: Props) => {
    const [tags, setTags] = useState(preTags ?? []);
    const [searchText, setSearchText] = useState('');
    const [showOptions, setShowOptions] = useState<any>(false);

    return (
        <div style={{
            width: 350
        }}>
            <Top showOptions={showOptions} tags={tags} setTags={setTags} setShowOptions={setShowOptions} searchText={searchText} setSearchText={setSearchText}/>
            {!!showOptions && <Bottom options={options} singleSelect={singleSelect} searchText={searchText} setTags={setTags}/>}
        </div>
    );
};