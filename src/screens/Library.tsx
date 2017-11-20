import * as React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Library extends React.Component<any, any> {
    public render() {
        const item = this.props.libraries;
        return (
            <FlatList
                data={item}
                extraData={this.props.selectedLibID}
                keyExtractor={this._keyExtractor}
                renderItem={(rowItem) => this._renderItem(rowItem)}
                ListHeaderComponent={this.headerComponent}
            />
        );
    }

    private _keyExtractor = (x: any, y: any) => y;

    private _renderItem = (rowItem: any) => {
        const { title, description, id } = rowItem.item;
        return (
            <TouchableOpacity onPress={() => this.onPress(id)}>
                <Card title={title} wrapperStyle={{ padding: 0 }}>
                    {this.renderDescriptionHelper(rowItem.item)}
                </Card>
            </TouchableOpacity>
        );
    }

    private headerComponent = () => {
        return (
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Tech Stack</Text>
            </View>
        );
    }

    private onPress = (id: any) => {
        this.props.selectLibrary(id);
    }

    private renderDescriptionHelper = (data: any) => {
        if (data.id === this.props.selectedLibID) {
            return <Text>{data.description}</Text>;
        }
        return null;
    }
}

interface IAllLibraries {
    libraries: IJsonObject[];
    selectedLibraryId: IJsonObject[];
}

interface IJsonObject {
    description: string;
    id: number;
    title: string;
}

const mapStateToProps = (state: IAllLibraries) => {
    return {
        selectedLibID: state.selectedLibraryId,
        libraries: state.libraries
    };
};

export default connect(mapStateToProps, actions)(Library);
