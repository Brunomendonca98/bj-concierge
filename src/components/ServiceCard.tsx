import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';


type Props = {
title: string;
description: string;
onPress?: () => void;
};


export default function ServiceCard({ title, description, onPress }: Props) {
return (
<TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.card}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.desc}>{description}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
card: {
backgroundColor: colors.card,
borderRadius: 16,
padding: 16,
marginBottom: 12,
borderWidth: 1,
borderColor: '#1F2937',
},
title: { color: colors.text, fontWeight: '700', fontSize: 18, marginBottom: 6 },
desc: { color: colors.muted, fontSize: 14 },
});