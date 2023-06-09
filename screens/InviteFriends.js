import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InviteFriends = () => {
  return (
    <View style={styles.inviteFriends}>
      <View style={styles.tabBar}>
        <View style={styles.icon}>
          <Image
            style={styles.iconmenu}
            contentFit="cover"
            source={require("../assets/iconmenu.png")}
          />
          <Image
            style={[styles.iconachivements, styles.iconchatSpaceBlock]}
            contentFit="cover"
            source={require("../assets/iconachivements.png")}
          />
          <Image
            style={[styles.iconchat, styles.iconchatSpaceBlock]}
            contentFit="cover"
            source={require("../assets/iconchat.png")}
          />
          <Image
            style={[styles.iconchat, styles.iconchatSpaceBlock]}
            contentFit="cover"
            source={require("../assets/iconprofile.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.homeIndicatorPosition]}
        contentFit="cover"
        source={require("../assets/status-bar1.png")}
      />
      <View style={styles.header2}>
        <View style={[styles.header, styles.headerPosition]}>
          <LinearGradient
            style={[styles.rectangle, styles.rectanglePosition]}
            locations={[0.56, 1]}
            colors={["#b0d45d", "#b0d45d"]}
          />
          <Text style={styles.supportRequest}>Invite Friends</Text>
          <Image
            style={[styles.iconchevronLeft, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/iconchevronleft.png")}
          />
        </View>
      </View>
      <View style={[styles.list, styles.listPosition]}>
        <View style={[styles.rectangle1, styles.headerPosition]} />
        <Text style={[styles.a, styles.aPosition]}>A</Text>
        <Text style={[styles.b, styles.aPosition]}>B</Text>
        <View style={[styles.inviteList, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval.png")}
          />
          <Text style={styles.contentCopy}>Adam Bednářová</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <LinearGradient
              style={[styles.rectangle2, styles.rectangleLayout]}
              locations={[1]}
              colors={["#b0d45d"]}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
        </View>
        <View style={[styles.inviteList1, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
          <Text style={styles.contentCopy}>Bao Shu</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <View style={[styles.rectangle3, styles.rectangleLayout]} />
            <Text style={[styles.title1, styles.titleTypo]}>Done</Text>
          </View>
        </View>
        <View style={[styles.inviteList2, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval2.png")}
          />
          <Text style={styles.contentCopy}>Brianna Bailey</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <LinearGradient
              style={[styles.rectangle2, styles.rectangleLayout]}
              locations={[1]}
              colors={["#b0d45d"]}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
        </View>
        <View style={[styles.inviteList3, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval3.png")}
          />
          <Text style={styles.contentCopy}>Adrian Oliveira</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <View style={[styles.rectangle3, styles.rectangleLayout]} />
            <Text style={[styles.title1, styles.titleTypo]}>Done</Text>
          </View>
        </View>
        <View style={[styles.inviteList4, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval4.png")}
          />
          <Text style={styles.contentCopy}>Al Koselev</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <LinearGradient
              style={[styles.rectangle2, styles.rectangleLayout]}
              locations={[1]}
              colors={["#b0d45d"]}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
        </View>
        <View style={[styles.inviteList5, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval5.png")}
          />
          <Text style={styles.contentCopy}>Alia Blue</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <LinearGradient
              style={[styles.rectangle2, styles.rectangleLayout]}
              locations={[1]}
              colors={["#b0d45d"]}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
        </View>
        <View style={[styles.inviteList6, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval6.png")}
          />
          <Text style={styles.contentCopy}>Aki Jianhong</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <View style={[styles.rectangle3, styles.rectangleLayout]} />
            <Text style={[styles.title1, styles.titleTypo]}>Done</Text>
          </View>
        </View>
        <View style={[styles.inviteList7, styles.invitePosition]}>
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            contentFit="cover"
            source={require("../assets/oval7.png")}
          />
          <Text style={styles.contentCopy}>Argon Nkechi</Text>
          <View style={[styles.buttonghost1, styles.listPosition]}>
            <LinearGradient
              style={[styles.rectangle2, styles.rectangleLayout]}
              locations={[1]}
              colors={["#b0d45d"]}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconchatSpaceBlock: {
    marginLeft: 52,
    height: 20,
  },
  homeIndicatorPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  rectanglePosition: {
    backgroundColor: Color.gradientsG900DarkAccent,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ovalIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  listPosition: {
    right: "0%",
    position: "absolute",
  },
  aPosition: {
    height: 24,
    width: 14,
    left: 29,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    color: Color.midnightblue_100,
    fontSize: FontSize.size_2xl,
    top: "50%",
    position: "absolute",
  },
  invitePosition: {
    left: "5.87%",
    right: "5.79%",
    width: "88.34%",
    height: "8.11%",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.size_mini,
    marginTop: -10.48,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  iconmenu: {
    height: 20,
    width: 24,
  },
  iconachivements: {
    width: 20,
  },
  iconchat: {
    width: 24,
    marginLeft: 52,
  },
  icon: {
    top: 13,
    left: 39,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  tabBar: {
    top: 730,
    left: 24,
    borderRadius: Border.br_base,
    shadowColor: "rgba(46, 49, 118, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 28,
    elevation: 28,
    shadowOpacity: 1,
    width: 327,
    height: 46,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
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
    top: 780,
    height: 32,
  },
  statusBarIcon: {
    top: 0,
    height: 44,
  },
  rectangle: {
    position: "absolute",
  },
  supportRequest: {
    marginTop: -68.5,
    left: "30.3%",
    textAlign: "center",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_2xl,
    top: "50%",
    color: Color.midnightblue_100,
    position: "absolute",
  },
  iconchevronLeft: {
    height: "8.08%",
    width: "5.18%",
    top: "24.45%",
    right: "87.49%",
    bottom: "67.48%",
    left: "7.33%",
  },
  header: {
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  header2: {
    top: -27,
    left: 1,
    width: 374,
    height: 231,
    position: "absolute",
  },
  rectangle1: {
    borderTopLeftRadius: 48,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  a: {
    marginTop: -335.28,
  },
  b: {
    marginTop: 172.5,
  },
  ovalIcon: {
    width: "17.49%",
    right: "82.51%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  contentCopy: {
    marginTop: -10.96,
    left: 80,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    color: Color.midnightblue_100,
    top: "50%",
    position: "absolute",
  },
  rectangle2: {
    backgroundColor: Color.gradientsG900DarkAccent,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  title: {
    left: "22.25%",
    color: Color.white,
  },
  buttonghost1: {
    height: "50%",
    width: "21.58%",
    top: "25%",
    bottom: "25%",
    left: "78.42%",
  },
  inviteList: {
    top: "8.24%",
    bottom: "83.65%",
  },
  rectangle3: {
    height: "103.45%",
    width: "101.4%",
    top: "-1.73%",
    right: "-0.7%",
    bottom: "-1.73%",
    left: "-0.7%",
    borderStyle: "solid",
    borderColor: "#c7c7cc",
    borderWidth: 1,
    opacity: 0.5,
  },
  title1: {
    left: "20.85%",
    color: Color.midnightblue_100,
    fontSize: FontSize.size_mini,
    marginTop: -10.48,
  },
  inviteList1: {
    top: "79.36%",
    bottom: "12.53%",
  },
  inviteList2: {
    top: "90.51%",
    bottom: "1.37%",
  },
  inviteList3: {
    top: "19.4%",
    bottom: "72.49%",
  },
  inviteList4: {
    top: "30.55%",
    bottom: "61.34%",
  },
  inviteList5: {
    top: "41.71%",
    bottom: "50.18%",
  },
  inviteList6: {
    top: "52.86%",
    bottom: "39.02%",
  },
  inviteList7: {
    top: "64.02%",
    bottom: "27.87%",
  },
  list: {
    height: "87.93%",
    top: "9.61%",
    bottom: "2.46%",
    left: "0%",
    width: "100%",
  },
  inviteFriends: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default InviteFriends;
