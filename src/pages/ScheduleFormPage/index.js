import React, { Component } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import SelectScheduleMaterials from './components/SelectScheduleMaterials';
import SelectScheduleType from './components/SelectScheduleType';

import Actions from './components/Actions';

export default class ScheduleFormPage extends Component {
  constructor(props) {
    super(props);

    this.handleSelectType = this.handleSelectType.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);

    this.state = {
      formControls: {
        step: 1,
        type: null,
        materials: [
          {
            id: 1,
            name: 'Frascos estéreis',
            icon: require('@assets/icons/frasco.png'),
            amount: 0,
          },
          {
            id: 2,
            name: 'Gazes',
            icon: require('@assets/icons/gaze.png'),
            amount: 0,
          },
          {
            id: 3,
            name: 'Máquina de ordenha manual',
            icon: require('@assets/icons/machine.png'),
            amount: 0,
          },
        ],
      },
    };
  }

  handleSelectType(selectedType) {
    this.setState({
      ...this.state,
      formControls: {
        ...this.state.formControls,
        type: selectedType,
      },
    });
  }

  handleChangeAmount({ material, newAmount }) {
    const { materials } = this.state.formControls;
    const newMaterials = materials.map((m) => {
      if (m.id === material.id) {
        m.amount = newAmount;
      }
      return m;
    });

    this.setState({
      ...this.state,
      formControls: {
        ...this.state.formControls,
        materials: newMaterials,
      },
    });
  }

  handleChangeStep(newStep) {
    this.setState({
      ...this.state,
      formControls: {
        ...this.state.formControls,
        step: newStep,
      },
    });
  }

  render() {
    const { type, step, materials, isChanging } = this.state.formControls;

    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          {step === 1 ? (
            <SelectScheduleType
              type={type}
              handleSelectType={this.handleSelectType}
            />
          ) : null}

          {step > 1 ? (
            <SelectScheduleMaterials
              materials={materials}
              formControls={this.state.formControls}
              handleChangeAmount={this.handleChangeAmount}
            />
          ) : null}
        </View>
        <Actions
          step={step}
          handleChangeStep={this.handleChangeStep}
          handleBack={this.handleBack}
        />
      </View>
    );
  }
}
