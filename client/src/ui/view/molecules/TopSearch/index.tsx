import React, { useState, useEffect } from 'react';

import Box from '@view/atoms/Box';
import { SearchIcon } from '@view/atoms/SvgIcon';

import classes from './style.module.scss';

export interface TopSearchProps {
    onSearch?: (value: string) => void;
    timeDelay?: number;
}

const TopSearch: React.FC<TopSearchProps> = (props) => {
    const { onSearch, timeDelay = 1000 } = props;

    const [state, setState] = useState(() => {
        return {
            value: '',
            timeout: 0,
        };
    });

    useEffect(() => {
        const delay = setTimeout(() => {
            const time = new Date().getTime();
            if (state.value !== '' && time - state.timeout > timeDelay) {
                onSearch && onSearch(state.value);
            }
        }, timeDelay);

        return () => {
            clearTimeout(delay);
        };
    }, [state.value]);

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setState((prevState) => {
            return {
                ...prevState,
                value: event.target.value,
                timeout: new Date().getTime(),
            };
        });
    };

    return (
        <Box className={classes['top-search']} bordered>
            <SearchIcon style={{ width: 10, height: 10 }} isActive />
            <Box className={classes['top-search-input']}>
                <input type="text" onChange={handelChange} />
            </Box>
        </Box>
    );
};

export default TopSearch;
