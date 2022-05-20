import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Array<T extends object>({data, xml, style = {}}: {data: Array<T>, xml: (data: T) => JSX.Element, style?: any}) {
  const xmlArr: any[] = [];

	for (let d of data) {
		const elem = xml(d);
		xmlArr.push(elem);
	}

	return (
    <View style={style}>
        {xmlArr.map((elem, i) => React.cloneElement(elem, {key: i}))}
    </View>
  );
}

const styles = StyleSheet.create({
  
});