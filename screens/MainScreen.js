import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const MainScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={[styles.tabBar, styles.tabBarLayout]}>
        <View style={styles.icon}>
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolshomeoutline2.png")}
          />
          <Image
            style={styles.faSolidwalkingIcon}
            contentFit="cover"
            source={require("../assets/fasolidwalking1.png")}
          />
          <Image
            style={styles.trophyIcon}
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
      <View style={[styles.subtitle, styles.tabBarLayout]}>
        <Text style={[styles.prizesNearYou, styles.weeklyGoalTypo]}>
          Prizes Near You
        </Text>
        <Text style={[styles.browsMap, styles.helloTypo]}>Brows map</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </View>
      <View style={[styles.currentActivity, styles.tabBarLayout]}>
        <Text style={[styles.kcal, styles.kcalPosition]}>539 kcal</Text>
        <Text style={[styles.text, styles.kcalPosition]}>00:04:44</Text>
        <Text style={[styles.km, styles.kmTypo]}>1.2 km</Text>
        <Text style={[styles.currentRoute, styles.kmTypo]}>Current route</Text>
        <View style={styles.activityicon}>
          <Image
            style={[styles.activityiconChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.image10Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-131.png")}
          />
        </View>
      </View>
      <View style={[styles.infoFrame, styles.infoFramePosition]}>
        <View style={[styles.greeting, styles.statusPosition]}>
          <Text style={[styles.hello, styles.nameClr]}>Hello,</Text>
          <Text style={[styles.name, styles.nameClr]}>Oren</Text>
        </View>
        <Image
          style={[styles.avatarIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/avatar2.png")}
        />
        <Image
          style={styles.iconsettings}
          contentFit="cover"
          source={require("../assets/iconsettings.png")}
        />
        <Text style={[styles.status, styles.statusPosition]}>Tel Aviv</Text>
      </View>
      <View style={[styles.goalFrame, styles.tabBarLayout]}>
        <View style={styles.progressLine}>
          <View style={[styles.progressLineChild, styles.progressPosition]} />
          <View style={[styles.progressLineItem, styles.progressPosition]} />
        </View>
        <Text style={[styles.kmLeft, styles.kmLeftPosition]}>15 km left</Text>
        <Text style={[styles.kmDone, styles.kmLeftTypo]}>35 km done</Text>
        <Image
          style={[styles.iconexlightright2, styles.kmLeftPosition]}
          contentFit="cover"
          source={require("../assets/iconexlightright-2.png")}
        />
        <Text style={[styles.km1, styles.km1Position]}>50 km</Text>
        <Text style={[styles.weeklyGoal, styles.km1Position]}>Weekly goal</Text>
      </View>
      <View style={[styles.homeIndicator, styles.infoFramePosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.infoFramePosition]}
        contentFit="cover"
        source={require("../assets/status-bar1.png")}
      />
      <View style={styles.weatherReport}>
        <View style={styles.rectangle} />
        <View style={styles.rectangle1} />
        <Text style={[styles.septemberWednes, styles.text1Typo]}>
          28 September, Wednesday
        </Text>
        <Text style={[styles.cloudly, styles.text1Typo]}>Cloudly</Text>
        <Text style={[styles.text1, styles.text1Typo]}>18º</Text>
        <Image
          style={[styles.cloudlyIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/cloudly.png")}
        />
      </View>
      <View style={[styles.homeScreenChild, styles.mainLayout]} />
      <View style={[styles.homeScreenItem, styles.mainLayout]} />
      <View style={[styles.homeScreenInner, styles.mainLayout]} />
      <Image
        style={styles.pngwing1Icon}
        contentFit="cover"
        source={require("../assets/pngwing-1.png")}
      />
      <Image
        style={styles.pngwing2Icon}
        contentFit="cover"
        source={require("../assets/pngwing-2.png")}
      />
      <Image
        style={styles.pngwing3Icon}
        contentFit="cover"
        source={require("../assets/pngwing-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarLayout: {
    width: 327,
    position: "absolute",
  },
  weeklyGoalTypo: {
    color: Color.dark,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
  },
  helloTypo: {
    fontFamily: FontFamily.caption,
    fontSize: FontSize.title1_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kcalPosition: {
    opacity: 0.9,
    top: 34,
    color: Color.lightGrey,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    letterSpacing: 0.1,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.title3_size,
    top: 17,
    color: Color.lightGrey,
    textAlign: "left",
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  infoFramePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  statusPosition: {
    left: 76,
    position: "absolute",
  },
  nameClr: {
    color: Color.lightGrey,
    textAlign: "left",
    letterSpacing: 0.1,
  },
  progressPosition: {
    borderRadius: Border.br_9xs,
    height: 8,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kmLeftPosition: {
    opacity: 0.7,
    position: "absolute",
  },
  kmLeftTypo: {
    fontFamily: FontFamily.title2,
    fontWeight: "500",
    top: 65,
    fontSize: FontSize.title3_size,
    color: Color.dark,
    letterSpacing: 0.1,
  },
  km1Position: {
    top: 24,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.title1_size,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    color: Color.midnightblue_100,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
    position: "absolute",
  },
  mainLayout: {
    height: 97,
    width: 97,
    borderRadius: Border.br_xl,
    top: 608,
    backgroundColor: Color.yellowgreen_100,
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
    width: 20,
    height: 20,
    marginLeft: 64,
  },
  iconamoonprofileFill: {
    width: 21,
    height: 21,
    marginLeft: 64,
    overflow: "hidden",
  },
  icon: {
    top: 10,
    left: 28,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tabBar: {
    top: 733,
    height: 46,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    width: 327,
    left: 24,
    overflow: "hidden",
  },
  prizesNearYou: {
    textAlign: "left",
    letterSpacing: 0.1,
    top: 0,
    position: "absolute",
    fontSize: FontSize.title1_size,
    color: Color.dark,
    left: 0,
  },
  browsMap: {
    left: 240,
    textAlign: "right",
    color: Color.yellowgreen,
    letterSpacing: 0.1,
    top: 0,
    position: "absolute",
  },
  chevronLeftIcon: {
    height: "88.24%",
    width: "2.75%",
    top: "20.59%",
    right: "-1.38%",
    bottom: "-8.82%",
    left: "98.62%",
  },
  subtitle: {
    top: 563,
    left: 21,
    height: 17,
  },
  kcal: {
    left: 257,
    textAlign: "right",
  },
  text: {
    left: 80,
    textAlign: "left",
  },
  km: {
    left: 257,
  },
  currentRoute: {
    left: 80,
  },
  activityiconChild: {
    left: 0,
    width: 40,
    top: 0,
  },
  image10Icon: {
    left: 4,
    top: 0,
  },
  activityicon: {
    top: 12,
    left: 20,
    width: 44,
    height: 40,
    position: "absolute",
  },
  currentActivity: {
    top: 284,
    borderRadius: Border.br_11xl,
    height: 64,
    backgroundColor: Color.yellowgreen,
    left: 24,
    overflow: "hidden",
  },
  hello: {
    fontFamily: FontFamily.caption,
    fontSize: FontSize.title1_size,
  },
  name: {
    marginLeft: 2,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    color: Color.lightGrey,
    fontSize: FontSize.title1_size,
  },
  greeting: {
    top: 72,
    flexDirection: "row",
  },
  avatarIcon: {
    top: 68,
    left: 24,
  },
  iconsettings: {
    top: 76,
    left: 327,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  status: {
    top: 91,
    opacity: 0.8,
    color: Color.lightGrey,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.caption_size,
    left: 76,
    fontFamily: FontFamily.caption,
  },
  infoFrame: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 232,
    backgroundColor: Color.yellowgreen,
    top: 0,
    overflow: "hidden",
  },
  progressLineChild: {
    backgroundColor: Color.dark,
    opacity: 0.1,
    width: 279,
    borderRadius: Border.br_9xs,
  },
  progressLineItem: {
    width: 210,
    backgroundColor: Color.yellowgreen,
  },
  progressLine: {
    top: 88,
    height: 8,
    width: 279,
    left: 24,
    position: "absolute",
  },
  kmLeft: {
    left: 245,
    fontFamily: FontFamily.title2,
    fontWeight: "500",
    top: 65,
    fontSize: FontSize.title3_size,
    color: Color.dark,
    letterSpacing: 0.1,
    textAlign: "right",
  },
  kmDone: {
    left: 25,
    textAlign: "left",
    position: "absolute",
  },
  iconexlightright2: {
    top: 25,
    left: 286,
    width: 16,
    height: 16,
  },
  km1: {
    left: 119,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.yellowgreen,
  },
  weeklyGoal: {
    color: Color.dark,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    left: 24,
  },
  goalFrame: {
    top: 136,
    borderStyle: "solid",
    borderColor: "rgba(176, 212, 93, 0.1)",
    borderWidth: 3,
    height: 120,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    width: 327,
    left: 24,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 782,
    height: 30,
  },
  statusBarIcon: {
    height: 44,
    top: 0,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    opacity: 0.5,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  rectangle1: {
    height: "27.89%",
    top: "72.11%",
    borderRadius: 27,
    backgroundColor: Color.yellowgreen_100,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    width: "100%",
  },
  septemberWednes: {
    marginTop: 52.79,
    width: "75.3%",
    left: "12.5%",
    height: 19,
    fontSize: FontSize.size_base,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
  },
  cloudly: {
    marginTop: -29.21,
    width: "22.32%",
    left: "62.8%",
    height: 18,
    fontSize: FontSize.size_base,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
  },
  text1: {
    marginTop: -42.21,
    left: 160,
    fontSize: FontSize.size_13xl,
    width: 47,
    height: 36,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
  },
  cloudlyIcon: {
    height: "50.03%",
    width: "34.38%",
    top: "12.11%",
    right: "59.06%",
    bottom: "37.87%",
    left: "6.56%",
  },
  weatherReport: {
    height: "21.48%",
    width: "89.6%",
    top: "44.83%",
    right: "5.6%",
    bottom: "33.69%",
    left: "4.8%",
    position: "absolute",
  },
  homeScreenChild: {
    left: 30,
  },
  homeScreenItem: {
    left: 254,
  },
  homeScreenInner: {
    left: 142,
  },
  pngwing1Icon: {
    top: 621,
    left: 64,
    width: 29,
    height: 72,
    position: "absolute",
  },
  pngwing2Icon: {
    top: 618,
    left: 264,
    width: 78,
    height: 78,
    position: "absolute",
  },
  pngwing3Icon: {
    top: 612,
    left: 155,
    width: 75,
    height: 90,
    position: "absolute",
  },
  homeScreen: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.lightGrey,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

