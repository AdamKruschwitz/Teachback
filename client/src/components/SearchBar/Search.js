import React, { useRef, useState } from "react";
import {
    Container,
    SearchInput
} from './styles'

const Search = () => {

    const targetRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showSearchInput = isHovered || isFocused;

    return (

            <Container>
                <SearchInput />
            </Container>

    );
}

export default Search;