import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  title: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 27,
    fontFamily:'Poppins-Medium',
  },
  question: {
    color: "#20232a",
    textAlign: "left",
    fontSize: 17,
    fontFamily:'Poppins-Medium',
  },
  subtitle: {
    color: "#686464",
    textAlign: "center",
    fontSize: 15,
    fontFamily:'Poppins-Regular',
    paddingHorizontal:10
  },
  button:{
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    borderRadius:5,
    width:windowWidth/1.5,
    alignSelf:'center',
    paddingHorizontal:10,
    paddingVertical:7, 
    zIndex:1,
    elevation:1 ,
    marginBottom:10,
    marginTop:15  
  },
  buttonText:{
    fontFamily:'Poppins-Regular',
    color:'#fff',
    fontSize:17
  },
  buttonView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  questionView:{
    alignItems:'baseline',
    justifyContent:'flex-start',
    paddingVertical:10 
  },
  menubar:{
    position:'absolute',
    top:0,
    left:0,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    width:windowWidth,
    justifyContent:'space-between',
    zIndex:1
  },
  circle:{
    backgroundColor:'#ED9939',
    width:windowWidth/3,
    height:windowWidth/3,
    alignSelf:'center',
    borderWidth:windowWidth/40,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#F9D297'
  },
  circleOut:{
    backgroundColor:'#FDEED7',
    width:windowWidth/2.7,
    height:windowWidth/2.7,
    alignSelf:'center',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:40
  },
  languages:{
    marginVertical:20,
    marginHorizontal:30
  },
  languagesInner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:15
  },
  languagesInner2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  languagesText:{
    fontFamily:'Poppins-Regular',
    fontSize:17,
    paddingLeft:10
  },
  hr:{
    backgroundColor:'gray',
    height:0.7,
    width:windowWidth-60,
    alignSelf:'center'
  },
  inputView: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'gray',
    borderRadius:7,
    alignItems:'center',
    flexDirection:'row',
    zIndex:5,
    marginBottom:0
  },
  input: {
    height: 40,
    paddingLeft:10,
    fontSize:17
  },
  codeinput: {
    height: 40,
    width:40,
    borderRadius:5,
    borderWidth:1,
    borderColor:'gray',
    margin:5,
    fontSize:22,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    textAlignVertical:'center'
  },
  phoneCountry: {
    height: 40,
    alignItems:'center',
    flexDirection:'row'
  },
  answerView:{
    width:windowWidth-30,
    marginVertical:10
  },
  linearGradiant:{
    padding:15,
    borderRadius:10
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'  
  },
  terms:{
    fontFamily:'Poppins-Regular',
    fontSize:13,
    paddingLeft:5
  },
  underlineStyleBase: {
    width: 40,
    height: 40,
    borderWidth: 1,
    marginHorizontal:5,
    borderRadius:5,
    fontSize:19,
    color:'black'
  },

  underlineStyleHighLighted: {
    borderColor: "#ED9939",
  },
});

export default styles;