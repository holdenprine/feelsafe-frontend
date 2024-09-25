import React from 'react'
import { Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';

const CourseProgressBar = ({data}) => {

    const labels = [data.map(item => {item.moduleTitle})]
    const courseName = data.map(item => {item.courseName})
    const currentPosition = 1; // will eventually be a statement like -> data.findPosition(item => item.lastPosition)

    const indicatorStyles = {
        stepIndicatorSize: 40, // Increase the size of each step indicator
        currentStepIndicatorSize: 50, // Increase the size for the current step
        separatorStrokeWidth: 8, // Thicker connecting line
        currentStepStrokeWidth: 4, // Thicker stroke for the current step
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 4, // Increase stroke width for each step
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013', // Color for completed steps
        separatorUnFinishedColor: '#aaaaaa', // Color for unfinished steps
        stepIndicatorFinishedColor: '#fe7013', // Color for finished step indicators
        stepIndicatorUnFinishedColor: '#ffffff', // Color for unfinished step indicators
        stepIndicatorCurrentColor: '#ffffff', // Color for current step indicator
        stepIndicatorLabelFontSize: 15, // Larger font for step labels
        currentStepIndicatorLabelFontSize: 15,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999', // Color for step labels
        labelSize: 14,
        currentStepLabelColor: '#fe7013', // Color for the current step label
        stepStrokeCap: 'round', // Make the lines between steps curved
        justifyContent: 'center',
      };

  return (
    <View>
        <Text>{courseName}</Text>
        <StepIndicator 
            customStyles={indicatorStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount={data.length}
            direction='vertical'
        />
    </View>
  )
}

export default CourseProgressBar