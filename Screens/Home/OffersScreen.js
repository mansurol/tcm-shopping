import { View, Text,SafeAreaView,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Routes from '../../Utility/Routes'
export default function OffersScreen({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView>
    

        <View style={{backgroundColor:"#F5F6FB"}}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt)}>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p5.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </TouchableOpacity>
      </View>



      <View style={{backgroundColor:"#F5F6FB"}}>
        <View>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p7.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </View>
      </View>




      <View style={{backgroundColor:"#F5F6FB"}}>
        <View>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p1.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </View>
      </View>



      <View style={{backgroundColor:"#F5F6FB"}}>
        <View>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p6.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </View>
      </View>



      <View style={{backgroundColor:"#F5F6FB"}}>
        <View>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p4.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </View>
      </View>



      <View style={{backgroundColor:"#F5F6FB"}}>
        <View>
        <View style={{ alignItems: 'center',}} >
          <Image source={require("../../assets/PopularProduct/p3.jpg")} style={{ width: 340, height: 250,marginTop:20,}} />
      </View>
            <Text style={{marginTop:10 ,fontWeight: 'bold', fontSize: 18,margin:30}}>Mango Himshagor (Satkhira)+- 50gm</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,paddingBottom:10}}>
            <Text style={{color:"red" ,fontSize: 15,}}>$265 / 400gm</Text>
            <TouchableOpacity  style={{ backgroundColor:"#CBCBCB" ,height:30,width:30,   alignItems: 'center',justifyContent: 'center',}}>
            <FontAwesome name="plus" size={16} color="#1D2F3E"  />
            </TouchableOpacity >
            </View>
        </View>
      </View>
      </ScrollView>  
    </SafeAreaView>
  )
}