import _gulp from 'gulp';
import gulpHelp from 'gulp-help';
import setupProject from './build/setup-project.js';
import bundle from './build/bundle.js';

const gulp = gulpHelp(_gulp, { hideDepsMessage: true });

setupProject(gulp, __dirname);
bundle(gulp, __dirname);
