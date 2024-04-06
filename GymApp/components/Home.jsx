import React from 'react';
import {
  Image,
  ScrollView,
  ScrollViewBase,
  ScrollViewComponent,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
  StatusBar,
  ImageBackground
} from 'react-native';
import {Pwork, Yoga, category, nearyou} from './utils/data';
const Home = () => {
  return (

    <View className= "bg-white h-screen">
      <ImageBackground className=" absolute w-screen screen h-52" source={{uri:"https://t4.ftcdn.net/jpg/01/17/40/65/240_F_117406580_LA51sxh1Qg0zNA4Ir1zQ3g2npiEZmPPy.jpg"}} resizeMode="cover" ></ImageBackground>
        <StatusBar hidden={true}/>
      <View className=" flex ">
        <View className="px-4 mt-5  flex w-screen justify-between flex-row ">
          <View className=" flex flex-row">
            <Image
              className=" h-10 w-10"
              src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-02-1024.png"
            />
            <View>
              <Text className=" text-white font-medium ">Hello</Text>
              <Text className=" font-semibold text-black">Pradeep</Text>
            </View>
          </View>
          <View>
            <Image
              className=" h-10 w-10 "
              src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-1024.png"
            />
          </View>
        </View>
        <View className=" mb-8 w-[80%] mt-10 mx-9 rounded-full flex  justify-between flex-row align-middle     h-10 bg-white ">
          <TextInput className=" text-black text-lg ml-2" placeholder="search"></TextInput>
          <Image
            className="h-7 w-7 mr-2 mt-2"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-1024.png"
          />
        </View>
        <View className="bg-white  rounded-t-full h-10"></View>
      </View>

      <ScrollView className=" ml-3">
        <Text className=" font-bold text-black text-lg"> Category</Text>
        <ScrollView className="pt-2" horizontal={true}>
          {category.map(data => (
            <Pressable key={data.id} className=" flex    mr-7 ">
              <Image
                className=" ml-1  rounded-full h-10 w-10 "
                source={{uri: data.img}}
              />
              <Text className=" font-semibold text-black text-center">
                {data.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text className=" pt-6 font-bold text-black text-lg">
        
          Papular Gyms Near You
        </Text>

        <ScrollView className="pt-2" horizontal={true}>
          {nearyou.map(data => (
            <Pressable key={data.id} className="  border border-white">
              <Image
                className=" rounded  w-80 h-36 "
                source={{uri: data.img}}
              />
            </Pressable>
          ))}
        </ScrollView>
        <Text className=" pt-6 font-bold text-black text-lg">
          {' '}
          Papular Workout
        </Text>

        <ScrollView className="pt-2" horizontal={true}>
          {Pwork.map(data => (
            <Pressable key={data.id} className="  border border-white">
              <Image
                className=" rounded  bg-black  w-28 h-28 mr-6 "
                source={{uri: data.img}}
              />
            </Pressable>
          ))}
        </ScrollView>

        <Text className=" pt-6 font-bold text-black text-lg">
          {' '}
          Yoga session
        </Text>

        <ScrollView className="pt-2" horizontal={true}>
          {Yoga.map(data => (
            <Pressable key={data.id} className="  border border-white">
              <Image
                className=" rounded  bg-black  w-80 h-36 "
                source={{uri: data.img}}
              />
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
