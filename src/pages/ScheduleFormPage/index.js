import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';

import SelectScheduleMaterials from './components/SelectScheduleMaterials';
import SelectScheduleType from './components/SelectScheduleType';
import SelectScheduleDonation from './components/SelectScheduleDonation';
import SelectScheduleObservation from './components/SelectScheduleObservation';
import Actions from './components/Actions';

import { styles } from './styles';
import { CustomLottieView } from '@components/index';

import stepsForm from '@utils/enums/steps-form.enum';

export default class ScheduleFormPage extends Component {
  constructor(props) {
    super(props);

    this.handleSelectType = this.handleSelectType.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDonation = this.handleChangeDonation.bind(this);
    this.handleSetObservation = this.handleSetObservation.bind(this);

    this.state = {
      showAnimation: false,
      formControls: {
        step: stepsForm.TYPE,
        type: null,
        observation: '',
        collect: {
          amountMilk: 1,
          daysStartedToBeCollect: 1,
        },
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

  showAnimationView = () => {
    Keyboard.dismiss();
    this.setState({ showAnimation: true });
    setTimeout(() => {
      this.setState({ showAnimation: false });
      this.props.navigation.navigate('ScheduleSelect');
    }, 3000);
  };

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

  handleChangeDonation({ newAmountMilk, newDaysStartedToBeCollect }) {
    const {
      amountMilk,
      daysStartedToBeCollect,
    } = this.state.formControls.collect;

    this.setState({
      ...this.state,
      formControls: {
        ...this.state.formControls,
        collect: {
          amountMilk: newAmountMilk ? newAmountMilk : amountMilk,
          daysStartedToBeCollect: newDaysStartedToBeCollect
            ? newDaysStartedToBeCollect
            : daysStartedToBeCollect,
        },
      },
    });
  }

  handleSetObservation(observation) {
    this.setState({
      ...this.state,
      formControls: {
        ...this.state.formControls,
        observation,
      },
    });
  }

  handleChangeStep(newStep) {
    if (newStep <= stepsForm.OBSERVATION) {
      this.setState({
        ...this.state,
        formControls: {
          ...this.state.formControls,
          step: newStep,
        },
      });
      return;
    }

    this.showAnimationView();
  }

  render() {
    const {
      type,
      step,
      collect,
      materials,
      observation,
    } = this.state.formControls;
    const { showAnimation } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          {step === stepsForm.TYPE ? (
            <SelectScheduleType
              type={type}
              handleSelectType={this.handleSelectType}
            />
          ) : null}

          {step === stepsForm.MATERIALS ? (
            <SelectScheduleMaterials
              materials={materials}
              formControls={this.state.formControls}
              handleChangeAmount={this.handleChangeAmount}
            />
          ) : null}

          {step === stepsForm.COLLECT ? (
            <SelectScheduleDonation
              collect={collect}
              formControls={this.state.formControls}
              handleChangeDonation={this.handleChangeDonation}
            />
          ) : null}

          {step === stepsForm.OBSERVATION ? (
            <SelectScheduleObservation
              observation={observation}
              handleSetObservation={this.handleSetObservation}
            />
          ) : null}
        </View>
        <Actions
          step={step}
          type={type}
          handleChangeStep={this.handleChangeStep}
          handleBack={this.handleBack}
        />

        {showAnimation ? (
          <CustomLottieView
            source={require('@assets/animations/done.json')}
            type="full"
          />
        ) : null}
      </View>
    );
  }
}
