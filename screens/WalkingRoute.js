import * as React from "react";
import { useEffect, useState } from 'react';
import { Image } from "expo-image";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const userIcon = require('./user-icon.png');
const destinationIcon = require('./destination-icon.png');
const discountIcon1 = require('./Tamara.png');
const discountIcon2 = require('./Sumsum.png');
const discountIcon3 = require('./carrefour.png');
const selectedDiscountIcon = require('./selected-discount-icon.png');

const userLocation = { latitude: 32.081702, longitude: 34.773038 };
const destinationLocation = { latitude: 32.093891, longitude: 34.776715 };
const discountLocations = [
  { id: 1, name: 'Tamara Smoothies', coordinate: { latitude: 32.084712, longitude: 34.774348 } },
  { id: 2, name: 'Sumsum Salads', coordinate: { latitude: 32.085946, longitude: 34.774644 } },
  { id: 3, name: 'Carrefour', coordinate: { latitude: 32.091100, longitude: 34.776011 } },
];

const WalkingRoute = () => {
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  const toggleDiscountSelection = (discountId) => {
    setSelectedDiscounts((prevSelectedDiscounts) => {
      if (prevSelectedDiscounts.includes(discountId)) {
        return prevSelectedDiscounts.filter((id) => id !== discountId);
      } else {
        return [...prevSelectedDiscounts, discountId];
      }
    });
  };

  const getInitialRegion = () => {
    if (userLocation && destinationLocation) {
      const latitudeDelta = Math.abs(userLocation.latitude - destinationLocation.latitude) + 0.05;
      const longitudeDelta = Math.abs(userLocation.longitude - destinationLocation.longitude) + 0.05;
      const centerLatitude = (userLocation.latitude + destinationLocation.latitude) / 2;
      const centerLongitude = (userLocation.longitude + destinationLocation.longitude) / 2;

      return {
        latitude: centerLatitude,
        longitude: centerLongitude,
        latitudeDelta,
        longitudeDelta,
      };
    }

    return null;
  };

  const getDiscountLogoStyle = (discountId) => {
    return selectedDiscounts.includes(discountId)
      ? styles.selectedDiscountLogo
      : styles.discountLogo;
  };

  const getDiscountTextStyle = (discountId) => {
    return selectedDiscounts.includes(discountId)
      ? styles.selectedDiscountText
      : styles.discountText;
  };

  const getDiscountCoordinates = () => {
    if (selectedDiscounts.length > 0) {
      return selectedDiscounts.map((discountId) => {
        const discountLocation = discountLocations.find((location) => location.id === discountId);
        return discountLocation.coordinate;
      });
    } else {
      return [];
    }
  };
  return (
    <View style={styles.walkingRoute}>
      <View style={styles.bg}>
       
       
        <View style={[styles.tabBar, styles.tabBarShadowBox]}>
          <View style={styles.icon}>
            <Image
              style={styles.materialSymbolshomeOutlineIcon}
              contentFit="cover"
              source={require("../assets/materialsymbolshomeoutline.png")}
            />
            <Image
              style={styles.faSolidwalkingIcon}
              contentFit="cover"
              source={require("../assets/fasolidwalking.png")}
            />
            <Image
              style={[styles.trophyIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/trophy1.png")}
            />
            <Image
              style={styles.iconamoonprofileFill}
              contentFit="cover"
              source={require("../assets/iconamoonprofilefill.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.statusFrame, styles.tabBarShadowBox]}>
        <View style={[styles.statsTab, styles.statsTabFlexBox]}>
          <View style={[styles.distance, styles.aloriesLayout]}>
            <Text style={[styles.km, styles.cTypo]}>km</Text>
            <Text style={[styles.text, styles.textTypo]}>1.9</Text>
            <View style={[styles.statsIcon, styles.statsIconPosition]}>
              <Image
                style={[styles.image13Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/image-13.png")}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={[styles.alories, styles.aloriesLayout]}>
            <Text style={[styles.kcal, styles.cTypo]}>kcal</Text>
            <Text style={[styles.text1, styles.textTypo]}>539</Text>
            <View style={[styles.statsIcon1, styles.statsIconPosition]}>
              <Image
                style={[styles.image13Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/image-9.png")}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={[styles.alories, styles.aloriesLayout]}>
            <Text style={[styles.c, styles.cTypo]}>c</Text>
            <Text style={[styles.text2, styles.textTypo]}>24°</Text>
            <View style={[styles.statsIcon1, styles.statsIconPosition]} />
            <Image
              style={[styles.emojiIcon1, styles.emojiIconLayout]}
              contentFit="cover"
              source={require("../assets/emoji1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text3, styles.textTypo]}>00:09:44</Text>
        <View style={[styles.iconpause, styles.iconpauseLayout]}>
          <View style={[styles.iconpause1, styles.iconpauseLayout]}>
            <View style={styles.iconpauseChild} />
          </View>
        </View>
        <Text style={[styles.walkingTime, styles.titleTypo]}>Walking time</Text>
        <Image
          style={[styles.playIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/play.png")}
        />
      </View>
      <View style={[styles.routeIcon, styles.tabBarShadowBox]}>
      <MapView style={styles.map} initialRegion={getInitialRegion()}>
        {/* Render the user location marker */}
        <Marker coordinate={userLocation}>
          <Image source={userIcon} style={styles.markerIcon} />
        </Marker>

        {/* Render the destination location marker */}
        <Marker coordinate={destinationLocation}>
          <Image source={destinationIcon} style={styles.markerIcon} />
        </Marker>

        {/* Render the path between userLocation, selected discount locations, and destinationLocation */}
        <Polyline
          coordinates={[
            userLocation,
            ...getDiscountCoordinates(),
            destinationLocation,
          ]}
          strokeWidth={3}
          strokeColor="green"
        />

        {/* Render the discount locations markers */}
        {discountLocations.map((discountLocation) => (
          <Marker
            key={discountLocation.id}
            coordinate={discountLocation.coordinate}
            onPress={() => toggleDiscountSelection(discountLocation.id)}
          >
            <View style={styles.discountMarkerContainer}>
              <Image source={getDiscountIcon(discountLocation.id)} style={styles.discountIcon} />
              <View
                style={[
                  styles.discountIndicator,
                  selectedDiscounts.includes(discountLocation.id) && styles.selectedDiscountIndicator,
                ]}
              />
            </View>
          </Marker>
        ))}
      </MapView>
      </View>
      <Text style={[styles.title, styles.titleTypo]}>Current walking</Text>
      <View style={[styles.gpsStatus, styles.statsTabFlexBox]}>
        <Text style={[styles.gps, styles.gpsFlexBox]}>GPS</Text>
        <View style={styles.icongps}>
          <View style={[styles.icongpsChild, styles.icongpsChildLayout]} />
          <View style={[styles.icongpsItem, styles.icongpsLayout]} />
          <View style={[styles.icongpsInner, styles.icongpsLayout]} />
        </View>
      </View>
      <View style={[styles.iconleftchevron, styles.iconleftchevronLayout]}>
        <View style={[styles.iconleftchevron1, styles.iconleftchevronLayout]}>
          <View
            style={[styles.iconleftchevronChild, styles.iconleftchevronLayout]}
          />
          <Image
            style={[styles.vectorIcon, styles.emojiIconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  mapIconPosition: {
    top: 1,
    position: "absolute",
  },
  emojiIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gpsFlexBox: {
    textAlign: "left",
    color: Color.dark,
  },
  tabBarShadowBox: {
    width: 327,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: 20,
    height: 20,
  },
  statsTabFlexBox: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  aloriesLayout: {
    height: 60,
    overflow: "hidden",
  },
  cTypo: {
    textAlign: "right",
    top: 39,
    fontFamily: FontFamily.caption,
    opacity: 0.7,
    color: Color.dark,
    letterSpacing: 0.1,
    fontSize: FontSize.caption_size,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.title1,
    fontWeight: "600",
  },
  statsIconPosition: {
    top: 8,
    width: 20,
    height: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    left: 0,
  },
  iconpauseLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.title1_size,
    textAlign: "left",
    color: Color.dark,
    letterSpacing: 0.1,
    position: "absolute",
  },
  icongpsChildLayout: {
    height: 5,
    position: "absolute",
  },
  icongpsLayout: {
    width: 2,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.yellowgreen,
  },
  iconleftchevronLayout: {
    height: 32,
    position: "absolute",
  },
  mapIcon: {
    left: 1,
    width: 375,
    height: 812,
  },
  emojiIcon: {
    height: "2.09%",
    width: "2.01%",
    top: "19.83%",
    right: "55.05%",
    bottom: "78.08%",
    left: "42.93%",
  },
  iconlocation: {
    top: 173,
    left: 108,
    height: 20,
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  bgChild: {
    top: 282,
    left: 130,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(199, 210, 217, 0.77)",
    width: 101,
    height: 62,
    position: "absolute",
  },
  landwerCaf: {
    top: 289,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    opacity: 0.7,
    height: 12,
    width: 76,
    letterSpacing: 0.1,
    color: Color.dark,
    fontSize: FontSize.caption_size,
    left: 140,
    position: "absolute",
  },
  getAnInstant: {
    top: 304,
    fontSize: 8,
    fontWeight: "200",
    fontFamily: FontFamily.interExtralight,
    opacity: 0.7,
    width: 76,
    letterSpacing: 0.1,
    color: Color.dark,
    left: 140,
    position: "absolute",
  },
  materialSymbolshomeOutlineIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  faSolidwalkingIcon: {
    width: 14,
    height: 23,
    marginLeft: 64,
    overflow: "hidden",
  },
  trophyIcon: {
    marginLeft: 64,
  },
  iconamoonprofileFill: {
    height: 21,
    marginLeft: 64,
    width: 21,
    overflow: "hidden",
  },
  icon: {
    top: 10,
    left: 28,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tabBar: {
    top: 733,
    height: 46,
  },
  bg: {
    top: -1,
    left: -1,
    width: 375,
    position: "absolute",
    height: 812,
  },
  km: {
    left: 56,
  },
  text: {
    left: 48,
    letterSpacing: 0.2,
    fontSize: FontSize.size_mid,
    top: 16,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    textAlign: "right",
    color: Color.dark,
    position: "absolute",
  },
  image13Icon: {
    left: 0,
    width: 20,
    height: 20,
    position: "absolute",
  },
  statsIcon: {
    left: 4,
  },
  distance: {
    width: 76,
  },
  divider: {
    width: 1,
    opacity: 0.1,
    marginLeft: 8,
    height: 44,
    backgroundColor: Color.dark,
  },
  kcal: {
    left: 54,
  },
  text1: {
    left: 42,
    letterSpacing: 0.2,
    fontSize: FontSize.size_mid,
    top: 16,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    textAlign: "right",
    color: Color.dark,
    position: "absolute",
  },
  statsIcon1: {
    left: 8,
  },
  alories: {
    width: 80,
    marginLeft: 8,
  },
  c: {
    left: 69,
  },
  text2: {
    left: 46,
    letterSpacing: 0.2,
    fontSize: FontSize.size_mid,
    top: 16,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    textAlign: "right",
    color: Color.dark,
    position: "absolute",
  },
  emojiIcon1: {
    height: "33.33%",
    width: "25%",
    top: "16.67%",
    right: "65%",
    bottom: "50%",
    left: "10%",
  },
  statsTab: {
    top: 88,
    paddingHorizontal: Padding.p_5xs,
    left: 20,
    backgroundColor: Color.lightGrey,
  },
  text3: {
    top: 41,
    fontSize: 28,
    letterSpacing: 0.3,
    left: 20,
    textAlign: "left",
    color: Color.dark,
    position: "absolute",
  },
  iconpauseChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.yellowgreen,
    height: 40,
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconpause1: {
    left: 0,
    top: 0,
  },
  iconpause: {
    top: 26,
    left: 267,
  },
  walkingTime: {
    top: 20,
    fontFamily: FontFamily.caption,
    left: 20,
    opacity: 0.7,
  },
  playIcon: {
    top: 36,
    left: 277,
    position: "absolute",
  },
  statusFrame: {
    top: 526,
    height: 176,
  },
  routeIcon: {
    top: 120,
    left: 123,
    width: 138,
    height: 400,
    position: "absolute",
  },
  title: {
    top: 71,
    left: 133,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
  },
  gps: {
    fontFamily: FontFamily.caption,
    letterSpacing: 0.1,
    color: Color.dark,
    fontSize: FontSize.caption_size,
  },
  icongpsChild: {
    top: 7,
    width: 2,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.yellowgreen,
    left: 1,
  },
  icongpsItem: {
    top: 4,
    left: 5,
    height: 8,
    position: "absolute",
  },
  icongpsInner: {
    left: 9,
    height: 11,
    top: 1,
    position: "absolute",
  },
  icongps: {
    width: 12,
    marginLeft: 8,
    height: 12,
  },
  gpsStatus: {
    top: 69,
    left: 296,
    paddingHorizontal: 6,
    backgroundColor: Color.white,
  },
  iconleftchevronChild: {
    borderRadius: 10,
    width: 32,
    height: 32,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "43.83%",
    width: "21.89%",
    top: "28.13%",
    right: "40.61%",
    bottom: "28.05%",
    left: "37.5%",
  },
  iconleftchevron1: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
  },
  iconleftchevron: {
    top: 64,
    width: 32,
    height: 32,
    left: 24,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    backgroundColor: Color.dark,
  },
  homeIndicator: {
    top: 780,
    left: 0,
    width: 375,
  },
  statusBarIcon: {
    height: 44,
    left: 0,
    width: 375,
    position: "absolute",
  },
  walkingRoute: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.lightGrey,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerIcon: {
    width: 32,
    height: 32,
  },
  discountSection: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  discountItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  discountLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  selectedDiscountLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'pink',
  },
  discountText: {
    fontSize: 16,
  },
  selectedDiscountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  discountMarkerContainer: {
    alignItems: 'center',
  },
  discountIcon: {
    width: 32,
    height: 32,
  },
  discountIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginTop: 2,
  },
  selectedDiscountIndicator: {
    backgroundColor: 'green',
  },
  mapIconPosition: {
    top: 1,
    position: 'absolute',
  },
  emojiIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  gpsFlexBox: {
    textAlign: 'left',
    color: Color.dark,
  },
  tabBarShadowBox: {
    width: 327,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(46, 49, 118, 0.1)',
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    left: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  iconLayout: {
    width: 20,
    height: 20,
  },
  statsTabFlexBox: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  caloriesLayout: {
    height: 60,
    overflow: 'hidden',
  },
  cTypo: {
    textAlign: 'right',
    top: 39,
    fontFamily: FontFamily.caption,
    opacity: 0.7,
    color: Color.dark,
    letterSpacing: 0.1,
    fontSize: FontSize.caption_size,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.title1,
    fontWeight: '600',
  },
  statsIconPosition: {
    top: 8,    position: 'absolute',
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WalkingRoute;

function getDiscountIcon(discountId) {
  switch (discountId) {
    case 1:
      return discountIcon1;
    case 2:
      return discountIcon2;
    case 3:
      return discountIcon3;
    default:
      return discountIcon1;
  }
}
