import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import DentistaHero from '../images/Dentista.jpg';
import ConsejosDentistas from '../images/Dentista2.jpg';
import CuidadoDental from '../images/Dentista3.jpg';
import Doctor from '../images/Dentista4.jpg';

const resolveAssetSource = (source) => {
    const resolvedSource = Image.resolveAssetSource(source);
    return resolvedSource.uri;
};

const PublicidadScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Imagen Hero */}

                <Image
                    source={{ uri: resolveAssetSource(DentistaHero) }}
                    style={styles.heroImage}
                />


                     {/* Sección 2: Cuidado Dental */}
                     <View style={styles.sectionContainer}>
                    <Image
                        source={{ uri: resolveAssetSource(Doctor) }}
                        style={styles.sectionImage}
                    />
                    <Text style={styles.sectionText}>
                        Soy dentista con mas de 30 años de experiencia, graduado de colegio militar y con precios muy flexibles
                    </Text>
                </View>

                {/* Sección 1: Consejos de Dentistas */}
                <View style={styles.sectionContainer}>
                    <Image
                        source={{ uri: resolveAssetSource(ConsejosDentistas) }}
                        style={styles.sectionImage}
                    />
                    <Text style={styles.sectionText}>
                        Para tener tus dientes sanos, debes cepillarlos al menos tres veces al día y durante tres minutos. Hazlo después de cada comida para eliminar los restos que quedan en tu boca.
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <Image
                        source={{ uri: resolveAssetSource(CuidadoDental) }}
                        style={styles.sectionImage}
                    />
                    <Text style={styles.sectionText}>
                        Nosotros como responsables del diagnóstico y tratamiento de las dolencias en los dientes y tejidos blandos de la boca, los dentistas, junto a los miembros de su equipo, también brindan a los pacientes asesoramiento sobre nutrición y cuidado dental para educarlos sobre cuidados preventivos, diagnósticos y planes de tratamiento.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heroImage: {
        width: '100%',
        height: 300, // Altura de la imagen hero
        resizeMode: 'cover',
    },
    sectionContainer: {
        margin: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    sectionImage: {
        width: '100%',
        height: 150, // Altura de la imagen en cada sección
        borderRadius: 8,
        marginBottom: 8,
        resizeMode: 'cover',
    },
    sectionText: {
        fontSize: 16,
        color: '#333333',
    },
});

export default PublicidadScreen;