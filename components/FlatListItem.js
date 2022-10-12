import React from 'react';
import { FlatList, Text } from 'react-native';
import { data } from '../data/data';
import ItemStudent from './Item';
const FlatListItem = () => {
    return (
        <FlatList data={data} renderItem={ItemStudent} keyExtractor={(item) => item.id}></FlatList>

        //     <FlatList
        //     data={DATA}
        //     renderItem={renderItem}
        //     keyExtractor={(item) => item.id}
        //     extraData={selectedId}
        //   />
    );
};

export default FlatListItem;
