# Table of Content

1. Container 
2. Card
3. Header
4. Button
5. Slider
6. Badge
7. Form
8. Picker
9. Spinner
10. Divider
11. Block
12. Picker
13. Text
## 1.Container
A common way to use Myd_Devtools screen structure is to have all the components within <Container>
for example

```js
  <Container>
        <Content>
          <Text>
            This is MYD UI KIT 
          </Text>
        </Content>
       </Container>
```

## 2.Card?


Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

**Configuration**

| property | Option | description |
| :---         |     :---:      |          ---: |
| transparent   | -   | Removes card shadow from iOS and elevation from Android    |
| dataArray     | 	user-defined array       | Array of data chunks to render iteratively.      |

## 3. Header
 There can be a single Header component into your Container.

## usage
``<container><Header /></container>``


**Configuration**
<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Left</td>
                <td>-</td>
                <td>-</td>
                <td>Components render to the left in Header</td>
            </tr>
            <tr>
                <td>Body</td>
                <td> - </td>
                <td>-</td>
                <td>Components render at the center of Header</td>
            </tr>
            <tr>
                <td>Right</td>
                <td> - </td>
                <td>-</td>
                <td>Components render to the right in Header</td>
            </tr>
            <tr>
                <td>iosBarStyle</td>
                <td> - </td>
                <td>light-content, dark-content, default</td>
                <td>Set iOS barStyle</td>
            </tr>
            <tr>
                <td>androidStatusBarColor</td>
                <td> - </td>
                <td> - </td>
                <td>Set background color for status bar in android</td>
            </tr>
            <tr>
                <td>noShadow</td>
                <td> - </td>
                <td> boolean </td>
                <td>Removes elevation from android</td>
            </tr>
            <tr>
                <td>searchBar</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add searchbar to header or not</td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> boolean </td>
                <td>Make header searchbar rounded</td>
            </tr>
            <tr>
                <td>hasSubtitle</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add subtitle to header</td>
            </tr>
            <tr>
                <td>hasSegment</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add segments to header</td>
            </tr>
            <tr>
                <td>hasTabs</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add tabs to header</td>
            </tr>
            <tr>
                <td>hasText</td>
                <td> - </td>
                <td> boolean </td>
                <td>This is <code>button</code> prop. Adds necessary padding when Text button defined in Left / Right of Header (iOS)</td>
            </tr>
            <tr>
                <td>noLeft</td>
                <td> - </td>
                <td> boolean </td>
                <td>Eliminates Left component and moves Title towards left (Android)</td>
            </tr>
            <tr>
                <td>span</td>
                <td> - </td>
                <td> boolean </td>
                <td>Doubles the header size</td>
            </tr>
            <tr>
                <td>transparent</td>
                <td> - </td>
                <td> boolean </td>
                <td> removes border of Header,shadow from iOS Header and elevation from Android Header. </td>
            </tr>
        </tbody>
    </table>
     <p>

</p>


## 4. Button
Buttons are the integral part of an application. They are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.

## Usage
``  <Container>
        <Content>
          <Button>
            <Text>Myd Button</Text>
          </Button>
        </Content>
      </Container>``
     
 **Configuration**
| property | Option | description |
| :---         |     :---:      |          ---: |
| active   | boolean  | State of button    |
| transparent     | 	boolean       | Renders child element of button|
| bordered	   | boolean   | Applies outline button style  |
| rounded     | boolean       | Renders button with slightly round shaped edges||
| block	   | boolean  | Block level button   |
| full     | 	boolean       | Full width button|
| disabled	   | boolean   | Disables click option for button|
| small     | boolean       | Small size butto     |


## 5. Slider

## 6. Badge
All of us must have seen notification badges somewhere, such as on smart phones or facebook. Myd_Devtools is here to include this into your collection of readymade components. Badges are numerical indicators of how many items are associated with an element. Badges can notify you that there are new or unread messages or notifications. These can be very effective in alerting the user to new things on your app.


example of Badge 

``    
    <Container>
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
        </Content>
      </Container>
    );
  }}
``

**Configuration**
| property | Option | description |
| :---         |     :---:      |          ---: |
| primary   | boolean  | Add a blue background color to your component    |
| success     | 	boolean       | Add a green background color to your component|
| info   | boolean   | Add a light blue background color to your component as shown  |
| warning     | boolean       | Add a yellow warning background color to your component      |

## 7. Form

myd Devtools makes use of List to design Forms that include group of related input components. Include any combination of myd Devtools components to make up your form.
Input is a myd Devtools component built on top of React Native's TextInput. A foundational component for inputting text into the app via a keyboard. Item component wrapper around it that apply specific styles.

Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.

## usage 
``  <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>``

      **Configuration**
| property | Option | description |
| :---         |     :---:      |          ---: |
| primary   | boolean  | Add a blue background color to your component    |
| success     | 	boolean       | Add a green background color to your component|
| info   | boolean   | Add a light blue background color to your component as shown  |
| warning     | boolean       | Add a yellow warning background color to your component      |

## 8. Picker
Renders the native picker component on iOS and Android.<br />

**usuage**
``    <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              {% raw %}style={{ width: 120 }}{% endraw %}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>``

 **configuration**
 <table class = "table table-bordered">
  <thead>
      <tr>
          <th>Property</th>
          <th>Default</th>
          <th>Option</th>
          <th width="50%">
              Description
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>renderHeader</td>
          <td> - </td>
          <td> - </td>
          <td>Makes component that appears as header of the Picker, comes with a backAction prop to close the picker.</td>
      </tr>
      <tr>
          <td>headerStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom style for header (iOS)</td>
      </tr>
      <tr>
          <td>iosHeader</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header title (iOS)</td>
      </tr>
      <tr>
          <td>headerBackButtonText</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header back button (iOS)</td>
      </tr>
      <tr>
          <td>headerBackButtonTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text style for the header back button< (iOS)/td>
      </tr>
      <tr>
          <td>headerTitleStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom title style for the header title (iOS)</td>
      </tr>
      <tr>
          <td>iosIcon</td>
          <td> - </td>
          <td> - </td>
          <td>Icon with picker dropdown (iOS)</td>
      </tr>
      <tr>
          <td>placeholder</td>
          <td> - </td>
          <td> - </td>
          <td>Placeholder for Picker component (iOS)</td>
      </tr>
      <tr>
          <td>placeholderStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom style for placeholder text (iOS)</td>
      </tr>
      <tr>
          <td>placeholderIconColor</td>
          <td> - </td>
          <td> - </td>
          <td>Set placeholder icon color (iOS)</td>
      </tr>
      <tr>
          <td>itemStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Style of items in Picker (iOS)</td>
      </tr>
      <tr>
          <td>itemTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of item component in Picker (iOS)</td>
      </tr>
      <tr>
          <td>textStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of header (iOS)</td>
      </tr>
      <tr>
          <td>supportedOrientations</td>
          <td> - </td>
          <td> Portrait, Landscape, Landscape-left, Landscape-right </td>
          <td>Allows the modal to rotate to any of the specified orientations</td>
      </tr>
      <tr>
          <td>enabled</td>
          <td> - </td>
          <td>boolean</td>
          <td>Enable / disable Picker button</td>
      </tr>
    </tbody>
  </table>


## 9. Spinner


If you have certain screens of your app that take some time to load, you may want to consider a page loader. A page loader is any kind of animation that visually communicates to a visitor that the page is loading and to just sit tight for a few seconds. Without a page loader, user might think that the app is being unresponsive and just click away in frustration. A page loader also provides a small distraction which can actually makes the wait seem much shorter.

<table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>color</td>
                <td>#45D56E</td>
                <td>user-defined</td>
                <td>Color of Spinner</td>
            </tr>
        </tbody>
    </table><br />

## Our Developers
Ali haider(http://github.com/alihaider589) | Ali Haider(http://github.com/ali-)
------------ | -------------
![Ali Haider](https://imgur.com/6BKZbDn.jpg)| ![Ali Haider](https://imgur.com/riugot4.jpg)
## Past App Created on MYD Devtools

- | -
------------ | -------------
![Ali Haider](https://imgur.com/jhGsshz.jpg)| ![Ali Haider](https://imgur.com/YEi6pNR.jpg)
![Ali Haider](https://imgur.com/UkMtO8t.jpg)| ![Ali Haider](https://imgur.com/YbfGBAA.jpg)
![Ali Haider](https://imgur.com/F8ZenFX.jpg)| ![Ali Haider](https://imgur.com/pHn8MFJ.jpg)
![Ali Haider](https://imgur.com/GiBvXEd.jpg)| ![Ali Haider](https://imgur.com/MJJPx38.jpg)
![Ali Haider](https://imgur.com/Xko89EN.jpg)| ![Ali Haider](https://imgur.com/i00XUPb.jpg)
![Ali Haider](https://imgur.com/2Jlihpy.jpg)| ![Ali Haider](https://imgur.com/bXPgYQV.jpg)



