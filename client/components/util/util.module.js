'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('larevelApp.util', [])
  .factory('Util', UtilService)
  .name;
