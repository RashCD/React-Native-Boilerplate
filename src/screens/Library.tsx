import * as React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, List, ListItem } from 'react-native-elements';

class Library extends React.Component<any, any> {
    public render() {
        const item = this.props.libraries;
        return (
            <FlatList
                data={item}
                keyExtractor={this._keyExtractor}
                renderItem={(rowItem) => this._renderItem(rowItem)}
            />
        );
    }

    protected _keyExtractor = (x: any, y: any) => y;

    protected _renderItem = (rowItem: any) => {
        const { title, description, id } = rowItem.item;
        return (
            <Card title={title}>
                <Text>{description}</Text>
            </Card>
        );
    }
}

interface Ilibraries {
    libraries: IJsonObject[];
}

interface IJsonObject {
    description: string;
    id: number;
    title: string;
}

const mapStateToProps = (state: Ilibraries) => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Library);
