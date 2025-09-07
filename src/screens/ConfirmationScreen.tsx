import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import colors from '../theme/colors';


type Props = NativeStackScreenProps<RootStackParamList, 'Confirmation'>;


export default function ConfirmationScreen({ route, navigation }: Props) {
const { name, email, service, date, time, pax } = route.params;


return (
<View style={styles.container}>
<Text style={styles.title}>Pedido recebido ✅</Text>
<Text style={styles.item}>Nome: <Text style={styles.value}>{name}</Text></Text>
<Text style={styles.item}>E-mail: <Text style={styles.value}>{email}</Text></Text>
<Text style={styles.item}>Serviço: <Text style={styles.value}>{service}</Text></Text>
<Text style={styles.item}>Data: <Text style={styles.value}>{date}</Text></Text>
<Text style={styles.item}>Hora: <Text style={styles.value}>{time}</Text></Text>
<Text style={styles.item}>Passageiros: <Text style={styles.value}>{pax}</Text></Text>


<TouchableOpacity style={styles.btn} onPress={() => navigation.popToTop()}>
<Text style={styles.btnText}>Voltar ao início</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 20, gap: 8 },
title: { color: colors.success, fontSize: 22, fontWeight: '800', marginBottom: 8 },
item: { color: colors.muted, fontSize: 14 },
value: { color: colors.text, fontWeight: '700' },
btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, marginTop: 16, alignItems: 'center' },
btnText: { color: '#001219', fontWeight: '800' },
});