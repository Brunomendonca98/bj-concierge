import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import { RootStackParamList } from '../navigation/RootNavigator';
import colors from '../theme/colors';


type Props = NativeStackScreenProps<RootStackParamList, 'Services'>;


export default function ServicesScreen({ navigation }: Props) {
return (
<ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
<View style={{ gap: 12 }}>
<ServiceCard
title="Traslado Aeroporto ↔ Hotel"
description="Carro executivo | Estimativa: R$ 120,00"
onPress={() => navigation.navigate('NewOrder')}
/>
<ServiceCard
title="Reserva de Hotel"
description="Sugestões 4⭐ em Maceió | Confirmação imediata"
onPress={() => navigation.navigate('NewOrder')}
/>
<ServiceCard
title="Catering a bordo"
description="Lanches e bebidas premium"
onPress={() => navigation.navigate('NewOrder')}
/>
</View>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg },
});